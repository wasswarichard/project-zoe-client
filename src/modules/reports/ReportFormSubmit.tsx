import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

type ReportFormProps = {
  reportId: string;
  fields: string[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(4),
    },
    field: {
      marginBottom: theme.spacing(2),
    },
    submitButton: {
      marginTop: theme.spacing(2),
    },
  })
);

const ReportForm: React.FC<ReportFormProps> = ({ reportId, fields }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submit the form data to the server or perform any required actions
    // Here, you can use an API request to submit the report data
    // You can send formData to the server using an HTTP request library like Axios

    console.log('we have submitted');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <TextField
          key={field}
          className={classes.field}
          label={field}
          name={field}
          value={formData[field] || ''}
          onChange={handleChange}
        />
      ))}
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default ReportForm;
