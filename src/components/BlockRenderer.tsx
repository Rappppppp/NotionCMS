import { FC, useMemo } from 'react';

type BlockType =
  | 'paragraph'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'heading_4'
  | 'heading_5'
  | 'bulleted_list_item'
  | 'image'
  | 'embed';

interface Block {
  type: BlockType;
  content: string;
}

const BlockRenderer: FC<{ block: Block }> = ({ block }) => {
  // Memoize the blockElements mapping
  const blockElements = useMemo(() => ({
    paragraph: <p>{block.content}</p>,
    heading_1: <h1>{block.content}</h1>,
    heading_2: <h2>{block.content}</h2>,
    heading_3: <h3>{block.content}</h3>,
    heading_4: <h4>{block.content}</h4>,
    heading_5: <h5>{block.content}</h5>,
    bulleted_list_item: <li>{block.content}</li>,
    embed: (
      <div>
        <img
          src={block.content}
          alt={`AltImage`}
          style={{ width: '50%' }} // Apply style width of 50%
        />
      </div>
    ),
    image: (
      <div>
        <img
          src={block.content}
          alt={`AltImage`}
          style={{ width: '50%' }} // Apply style width of 50%
        />
      </div>
    ),
  }), [block]);

  // Validate if block type is supported
  if (!(block.type in blockElements)) {
    return <p>Unsupported block type: {block.type}</p>;
  }

  // Render based on block type
  return blockElements[block.type as BlockType]; // Safe assertion since we checked existence
};

export default BlockRenderer;
