import axios from 'axios';

export const postData = body => axios({
  method: 'post',
  url: 'http://127.0.0.1:3000/api/print_info',
  data: body,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getData = async (body) => {

};
