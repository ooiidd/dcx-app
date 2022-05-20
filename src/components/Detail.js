import React, {useState, useEffect} from "react";
import "../css/Home.css";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";

export const Detail = () => {
    const {id} = useParams();
    let navigate = useNavigate();
    const [music, setMusic] = useState({});

    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3300/v1/chart/detail/${id}`
        }).then((res) => {
            setMusic(res.data.chart);
        })
    }, []);
    const back = () =>{
        navigate(-1)
    }
    return (
        <div>
            <a href="#" onClick={back}><img src={require(`../images/back_arrow.png`)}/></a>
            <h1 className="mid">음악 차트</h1>
            <h4 className="mid">{music.singer}</h4>
            <table className="table">
                <colgroup>
                    <col style={{width: '30%'}}/>
                    <col style={{width: '70%'}}/>
                </colgroup>
                <tr>
                    <td className="right-align">작사</td>
                    <td>{music.lyricist}</td>
                </tr>
                <tr>
                    <td className="right-align">작곡</td>
                    <td>{music.melodizer}</td>
                </tr>
                <tr>
                    <td className="right-align">장르</td>
                    <td>{music.genre}</td>
                </tr>
            </table>
        </div>
    )
}