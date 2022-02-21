import useBackground from "../hooks/useBackground";

const MouseMove = () => {
  const { background, position } = useBackground();
  return (
    <div style={{ background, height: '10vh' }}>
     <p>Mouse position viewer</p>
      <pre>
        {JSON.stringify(position, null, 2)}
      </pre>
    </div>
  );
}
 
export default MouseMove;