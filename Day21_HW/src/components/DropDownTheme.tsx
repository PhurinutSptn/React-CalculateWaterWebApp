
type ThemeProp = {
  setDarkMode: React.Dispatch<React.SetStateAction<string>>
}

const DropDownTheme = ({setDarkMode}: ThemeProp) => {

  const onChangeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDarkMode(event.target.value)
  }

  return(
    <div className="justify-end">
      <select name='theme' defaultValue='light' onChange={ onChangeTheme }>
        <option value='light'>🌞Light</option>
        <option value='dark'>🌙Dark</option>
      </select>
    </div>
  )
}

export default DropDownTheme