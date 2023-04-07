import { NavLink } from 'react-router-dom';

export const SeeAllButton = ({ adress }) => {
  return (
    //"See all" button wrapper
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {/* "See all" button*/}
      <NavLink
        to={adress}
        style={{
          backgroundColor: '#8AA936',
          maxWidth: 50,
          borderRadius: '6px',
          fontSize: '14px',
          padding: '10px 24px',
        }}
      >
        See all
      </NavLink>
    </div>
  );
};
