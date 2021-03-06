import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Grid, FormControl,InputLabel,Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const [descricao, setDescricao] = useState();
  const [categorias, setCategorias] = useState();

  const classes = useStyles();

  const submit = (event) => {
    event.preventDefault();
    alert(`Valores: Descrição - ${descricao}, Categorias - ${categorias}`)
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
      </div>
      <div className={classes.row}>
        <Grid container>
          <Grid item md={4}>
            <TextField
              className={classes.searchInput}
              fullWidth
              label="Descrição"
              placeholder="Descrição da tarefa"
              onChange={e => setDescricao(e.target.value)}
              value={descricao}
            />
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth>
              <InputLabel>Categorias</InputLabel>
              <Select value={categorias} onChange={e => setCategorias(e.target.value)}>
                <MenuItem value="">Selecione...</MenuItem>
                <MenuItem value={"TRABALHO"}>Trabalho</MenuItem>
                <MenuItem value={"ESTUDOS"}>Estudos</MenuItem>
                <MenuItem value={"OUTROS"}>Outros</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2}>
            <Button onClick={submit} variant="contained" color="secondary">Adicionar</Button>
          </Grid>
        </Grid>  
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
