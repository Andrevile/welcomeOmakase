import './styles.scss';

function PageTitle({ children }) {
  return (
    <div className='menu-title-container'>
      <p>{children}</p>
    </div>
  );
}

export default PageTitle;
