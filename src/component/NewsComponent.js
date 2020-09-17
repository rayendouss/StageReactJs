import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TableBody from '@material-ui/core/TableBody';
import { Link } from "react-router-dom";
import TablePagination from '@material-ui/core/TablePagination';

import {News} from '../shared/News'
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTawble(rows) {
console.log(rows.rows)

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} style={{marginLeft:50}}>
    
    
          <TableBody >
            {rows.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {

              return (
                <div >
                     <Link to={`/article/${row._id}`} style={{textDecoration: 'none'}}>
                <div >
                <figure >
         <a>  <img src={row.Photo} style = {{ width : 700, height :450}} /></a>
         <figcaption style={{position : "relative" , top:"-430px" , backgroundColor : "red" , left:"645px" , height:"30px" , lineHeight:"30px" , width:"50px", padding : "0 15Opx" , color:"white" ,borderRight:" 6px solid #FFFFFF" ,marginRight:"20"}}>
           {row.Type}
         </figcaption>
         </figure>
         </div>
         <h6 className="dateTime2" style={{float: "right"}}>{row.Date}</h6> <br></br>
        <p style={{float: "right"}}>{row.news}</p>
        </Link>
       </div>

              );
        })}
          </TableBody>
    
      <TablePagination
        rowsPerPageOptions={[1]}
        component="div"
        count={5}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
