import axios from 'axios';

export const postData = body => axios({
  method: 'post',
  url: 'https://sellify-app.herokuapp.com/',
  data: body,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getData = async (body) => {

};
