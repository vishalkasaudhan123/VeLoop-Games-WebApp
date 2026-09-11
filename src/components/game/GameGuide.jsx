import styles from "./GameGuide.module.css";

export default function GameGuide({ title, steps, reward }) {
  return (
    <section className={styles.guide}>
      <h2>{title}</h2>
      <ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
      <p><strong>Reward:</strong> {reward}</p>
    </section>
  );
}
