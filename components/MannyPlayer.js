export default function MannyPlayer ({ title }) {


  return (
    <div className="player">
      <img  src="/player.png"></img>
      <video id="video" src="/santacompressed.mp4" muted></video>

      <button id="unmutebutton">Play</button>
    </div>
  )
}
