const icon = ({
  width, height, color,
}) => (
  <svg width={width || '56'} height={height || '57'} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.4 34h1.2v1.4c0 2.6 2 4.6 4.6 4.6H34c2.6 0 4.6-2 4.6-4.6v-1.3h1.9c.6 0 1-.5 1-1v-5.6h.8c.2 0 .5-.3.5-.5v-.6c0-.2-.3-.5-.5-.5h-.8v-1c0-.6-.4-1-1-1h-1.7c-.3-1.5-1.6-2.1-1.6-2.1 4.1-1.2 1.6-5 1.6-5-.8 1.6-1.9 1.8-3.7 1.6-1.9-.1-10.4-4.1-15 0-2.2 2-2.7 4-2.6 5.5h-1a1 1 0 0 0-1 1v1h-.9c-.3 0-.5.3-.5.5v.6c0 .2.2.5.5.5h.8V33c0 .6.5 1 1 1Zm15.3-8c0-.3.3-.5.6-.5h6.9c.3 0 .6.2.6.6v5.8c0 .3-.3.6-.6.6h-6.9a.6.6 0 0 1-.6-.6V26ZM17 26c0-.3.3-.5.7-.5h6.8c.4 0 .6.2.6.6v5.8c0 .3-.2.6-.6.6h-6.8a.6.6 0 0 1-.7-.6V26Z"
      fill={color || '#00041A'}
    />
  </svg>
);

export default icon;
