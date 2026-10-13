import fs from 'node:fs';
import path from 'node:path';

type MdastNode = { type: string; [key: string]: unknown };

const STATIC_DIR = path.join(__dirname, '..', '..', 'static');

const VIDEO_EXT = /\.(mp4|webm)$/i;

const attr = (name: string, value: string | null = null) => ({
  type: 'mdxJsxAttribute',
  name,
  value,
});

const assertStaticFileExists = (url: string) => {
  if (!url.startsWith('/')) return;
  const file = path.join(STATIC_DIR, decodeURIComponent(url));
  if (!fs.existsSync(file)) throw new Error(`[remark-video] ${url} not found in static/`);
};

const videoNode = (image: MdastNode): MdastNode => {
  const url = String(image.url);
  if (!url.startsWith('/') && !/^https?:\/\//.test(url)) {
    throw new Error(
      `[remark-video] ${url}: use an absolute /static path or a full URL, relative video paths aren't bundled`,
    );
  }
  assertStaticFileExists(url);

  const attributes = [
    attr('src', url),
    attr('className', 'onx-video'),
    attr('controls'),
    attr('playsInline'),
    attr('preload', 'metadata'),
  ];
  if (image.alt) attributes.push(attr('aria-label', String(image.alt)));
  if (image.title) attributes.push(attr('title', String(image.title)));

  return { type: 'mdxJsxTextElement', name: 'video', attributes, children: [] };
};

/**
 * Turns markdown images pointing at .mp4/.webm files into <video> players,
 * so `![Installing](/videos/install.mp4)` works in plain .md pages too.
 * Must run before Docusaurus's transformImage, which would otherwise make it an <img>.
 */
const remarkVideo = () => (tree: MdastNode) => {
  const visit = (node: MdastNode) => {
    const children = node.children as MdastNode[] | undefined;
    if (!children) return;
    children.forEach((child, i) => {
      if (child.type === 'image' && VIDEO_EXT.test(String(child.url).split(/[?#]/)[0])) {
        children[i] = videoNode(child);
        return;
      }
      visit(child);
    });
  };
  visit(tree);
};

export default remarkVideo;
