import styles from "../styles/Home.module.css";

export default function FigmaWidget(theme) {
  return (
    <span className={styles.figma}>
      <div className={styles.container}>
        <model-viewer
          camera-controls
          src="../8.gltf"
          alt="A 3D model of an astronaut"
          camera-orbit="0deg 90deg 400%"
          shadow-intensity="0"
          auto-rotate
          rotation-per-second="100deg"
          max-field-of-view="100deg"
          min-field-of-view="70deg"
          max-camera-orbit="200deg"
          interaction-prompt="none"
          exposure="0.6"
        ></model-viewer>
        <p>
          Figma{" "}
          <a
            className={styles.link}
            href="https://www.figma.com/community/file/1118765940009688786"
            rel="noreferrer"
            target="_blank"
          >
            Library File
          </a>
        </p>
      </div>
    </span>
  );
}
