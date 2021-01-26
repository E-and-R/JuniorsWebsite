  import React from "react"
  import "../styles/skillbarStyles.scss"
  import Theme from "../components/Theme"
  import { ThemeProvider } from '@material-ui/styles';
  
  class SkillBars extends React.Component {
    constructor(props) {
      super(props);
      this.state = { collapsed: true };       
    }
    
    componentDidMount() {
      setTimeout(() => {
        this.setState({ collapsed: false })
      }, 3000);
    }
  
    render() {
      const { collapsed } = this.state;
      const { skills } = this.props;
  
      return(  
        <ThemeProvider theme={Theme}>
            <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
            <ul className="skills">
                {skills.map((skill, index) => 
                <li
                    key={skill.type}
                    style={{ width: `${skill.level}%`, backgroundColor: 'white' }}
                >
                    <p>{skill.type}<span>{skill.level}</span></p>
                </li>
                )}
            </ul>
            </div>
        </ThemeProvider>
      )
    }
  }
  
  export default  SkillBars;
  