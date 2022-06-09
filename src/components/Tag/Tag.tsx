import { getTagColors } from '../../utils/TagColors';
import './Tag.css';

const Tag = ({props}: any) => {
    const colors = getTagColors(props)
  return (
    <div className="Tag" style={{background: colors.background, color: colors.text}}>
        {props}
    </div>
  );
}

export default Tag;
