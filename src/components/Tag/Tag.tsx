import { getTagColors } from '../../utils/TagColors';
import './Tag.css';

interface TagProps {
  tag: string;
}

const Tag = ({tag}: TagProps) => {
    const colors = getTagColors(tag)
  return (
    <div className="Tag" style={{background: colors.background, color: colors.text}}>
        {tag}
    </div>
  );
}

export default Tag;
