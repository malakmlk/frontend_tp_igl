import React,{ Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Container from '@material-ui/core/Container';
import About from './About';




export default class Note extends Component {
 

  constructor(props) {
      super(props);
  
      /*this.onChangeCF = this.onChangeCF.bind(this);
      this.onChangeCI = this.onChangeCI.bind(this);
      this.onChangeCC = this.onChangeCC.bind(this);
      this.onChangeMoyenne = this.onChangemoyenne.bind(this);
      this.onChangeModule= this.onChangeModule.bind(this);
      this.onSubmit = this.onSubmit.bind(this);*/
  
      this.state = {
          CF: '',
          CI: '',
          CC: '',
          moyenne:'',
          module:'',
      }
  }
  

  
  onChangeCF(e) {
      this.setState({
          CF: e.target.value
      });
  }
  
  onChangeCI(e) {
      this.setState({
          CI: e.target.value
      });
  }
  
  onChangeCC(e) {
      this.setState({
          CC: e.target.value
      });
  }
  
  onChangeMoyenne(e) {
      this.setState({
          moyenne: e.target.value
      });
  }
  onChangeModule(e) {
    this.setState({
        module: e.target.value
    });
  }
  
  onSubmit(e) {
      e.preventDefault();
      const obj = {
          CF: this.state.CF,
          CI: this.state.CI,
          CC: this.state.CC,
          moyenne: this.state.moyenne,
          module: this.state.module,
  
      };
    /*  console.log(obj);
      axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
          .then(res => console.log(res.data));*/
      
      this.props.history.push('/');
  }
  
  render() {
    const classes = useStyles();
    const useStyles = makeStyles({
      root: {
        width: '50%',
        overflowX: 'auto',
        
      },
      table: {
        minWidth: 390,
        marginLeft:'800 px',
        marginTop:'1000px',
        width:"50px",
        shadow :90,
      },
    });
     function createData(Module, CC, CI, CF, Moyenne) {
      return { Module, CC, CI, CF, Moyenne };
    
    }
    
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      
    ];
      return (
    

        <Layout>
        <About></About>
   
       <React.Fragment>
       <Container fixed shadow={30}>
        
       
                       <Paper classModule={classes.root}  style ={{marginTop:'80px' }}>
                          
   
                       <Table classModule={classes.table} aria-label="simple table">
                           <TableHead>
                           <TableRow>
                               <TableCell>Module</TableCell>
                               <TableCell align="right">CC</TableCell>
                               <TableCell align="right">CI</TableCell>
                               <TableCell align="right">CF</TableCell>
                               <TableCell align="right">Moyenne</TableCell>
                           </TableRow>
                           </TableHead>
                           <TableBody>
                           {rows.map(row => (
                               <TableRow key={row.Module}>
                               <TableCell component="th" scope="row">
                                   {row.Module}
                               </TableCell>
                               <TableCell align="right">{row.CC}</TableCell>
                               <TableCell align="right">{row.CI}</TableCell>
                               <TableCell align="right">{row.CF}</TableCell>
                               <TableCell align="right">{row.Moyenne}</TableCell>
                               </TableRow>
                           ))}
                           </TableBody>
                       </Table>
                       </Paper>
                       
       </Container>
       </React.Fragment>
       </Layout>
         
      )
  }
  }
  
  
  




  
  
 

   
  
  
    
