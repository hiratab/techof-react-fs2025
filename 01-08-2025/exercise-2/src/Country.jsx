import styles from './Country.module.css'

const _styles = {
  countryName: {
    fontWeight: 700
  }
}

const Country = (props) => {
  return (
    <div className={styles['country-container']}>
      <p style={_styles.countryName}>{props.name}</p>
      <img src={props.flag} style={{ width: '4em', height: '3em', paddingLeft: '0.3em' }} />
    </div>
  )
}

export default Country