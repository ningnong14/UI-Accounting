import React, { useState,useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, NavLink,useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    username:"",
    password:""
  });
  const navigate = useNavigate()


  const CheckLogin = async() => {
    //ยิงService แล้วเช็คถ้าเกิด ผ่านก็ set state ให้เลย
    // setIsLogin(true);
    if(isLogin){
      //ค่อยทำ alret ต่อ 
    //  await Swal.fire({
    //     title: 'กรุณารอสักครู่......',
    //     html: '<FacebookIcon fontSize="large" />',
    //     icon: 'success',
    //     showConfirmButton:false,
    //     timer: 3000
    //   })
      navigate('/MainMenu');
    }
  };

  return (
    <>
      <Form className={"login-page"} style={{height:750}}>
        <div className={"login-page-content"}>
          <Form.Group className={"login-form"}>
            <Row className="center-item">
              <LoginSharpIcon style={{ width: 100, height: 100 }} />
            </Row>
            <Row>
              <h1 className="center-item">Sign In</h1>
            </Row>
            <Row className="mt-4">
              <TextField
                label="Username"
                type="text"
                autoComplete="off"
                variant="outlined"
                value={loginData.username}
                name="username"
                onChange={(e)=> setLoginData({...loginData,username:e.target.value})}
              />
            </Row>
            <Row className="mt-2">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="off"
                variant="outlined"
                name="password"
                value={loginData.password}
                onChange={(e)=> setLoginData({...loginData,password:e.target.value})}
              />
            </Row>
            {/* <Row className="mt-2 ">
            <FormControlLabel control={<CheckBox defaultChecked />} label="Remember Me" />
        </Row>         */}
            <Row className="mt-3">
              <Button
                className="login-button"
                variant="contained"
                color="secondary"
                onClick={() => CheckLogin()}
              >
                Login
              </Button>
            </Row>
          </Form.Group>
        </div>
      </Form>
    </>
  );
}
