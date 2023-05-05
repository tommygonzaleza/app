const filter = ({ width, height, style, color }) => (
  <svg
    width={width || '17'}
    height={height || '14'}
    style={style}
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.0625 1V1.29289L7.2041 7.07322C7.35354 7.21387 7.4375 7.40464 7.4375 7.60355V13H9.5625V7.60355C9.5625 7.40464 9.64646 7.21388 9.7959 7.07322L15.9375 1.29289V1H1.0625ZM0 0.75C0 0.335787 0.356772 0 0.796875 0H16.2031C16.6432 0 17 0.335786 17 0.75V1.39645C17 1.59536 16.916 1.78613 16.7666 1.92678L10.625 7.70711V13.25C10.625 13.6642 10.2682 14 9.82812 14H7.17188C6.73177 14 6.375 13.6642 6.375 13.25V7.70711L0.233399 1.92678C0.0839562 1.78612 0 1.59536 0 1.39645V0.75Z"
      fill={color || '#0097CF'}
    />
  </svg>
);

export default filter;
