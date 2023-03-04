import './styles.css';
import {ReactComponent as ArrowIcon} from 'assets/images/arrow.svg';

const Pagination = () => {
  return (
      <div className="pagination-container">
        <ArrowIcon className="arrow-inactive arrow-previous"/>
        <div className="pagination-item active"><span>1</span></div>
        <div className="pagination-item"><span>2</span></div>
        <div className="pagination-item"><span>3</span></div>
        <div className="pagination-item"><span>...</span></div>
        <div className="pagination-item"><span>10</span></div>
        <ArrowIcon className="arrow-active arrow-next"/>
      </div>
  );
};

export default Pagination;