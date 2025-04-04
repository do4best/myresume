function RangeFinder({myValue}) {
    return ( <>
    <div className="w-full max-w-xs">
  <input type="range" min={0} max="10" value={myValue} className="range range-accent" step="1" />
  <div className="flex justify-between px-1 m-0.5  text-xs">
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
    <span>|</span>
  </div>
  <div className="flex justify-between px-1 mt-1 text-xs">
    <span>&#9898; </span>
    <span>&#9898;</span>
    <span>&#9898;</span>
    <span>&#9898;</span>
    <span>&#9898;</span>
  </div>
</div>
    
    </> );
}

export default RangeFinder;