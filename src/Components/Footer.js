
const Footer = () => {
  const today = new Date()
  return (
    <footer className="App-footer">
      <a
        className="App-link"
        href="https://reacjs.org"
        target='_blank'
        rel='noopener noreferrer'
        >Learn React</a>
        <p><small>Italo Marangon &copy; - {today.getFullYear()}</small></p>
    </footer>
  )
}

export default Footer