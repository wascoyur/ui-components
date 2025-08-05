import s from './Clip-path.module.css'

export const ClipPath = () => {
  return <div className={s.root}>
      <div className={s.shape}>
          <div className={s.circle}></div>
          <div className={s.circle}></div>
      </div>
      <div className={s.shape}>
          <div className={s.circle}></div>
      </div>

  </div>
}
