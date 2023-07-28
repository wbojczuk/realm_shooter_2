import styles from "./loader.module.css"

interface props{
  size: string
}

export default function Loader(props: props) {
  return (
    <div
    className={styles.loader}
    style={{backgroundSize: (props.size !== undefined) ? props.size : "50%"}}
    ></div>
  )
}
