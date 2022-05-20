import React from "react";
import {Link} from "react-router-dom";

export const ChartList=({
    chartList
                        })=>{
    const chartListRender = () =>{
        let result = [];
        for(let i=0;i<chartList.length;i++){
            let div = <tr>
                <td className="">{chartList[i].rank}</td>
                <td><img src={require(`../images/${chartList[i].imageUrl}`)}/></td>
                <td>
                    <Link to={`/detail/${chartList[i].id}`} >
                        <div className="text-ellipsis"><span>{chartList[i].title}</span></div>
                    </Link>
                </td>
                <td><div className="text-ellipsis right-align"><span>{chartList[i].singer}</span></div></td>
            </tr>;
            result.push(div);
        }
        return result;
    }
    return(

        <table className="table">
            <colgroup>
                <col style={{width: '5%'}} />
                <col style={{width: '25%'}} />
                <col style={{width: '40%'}} />
                <col style={{width: '20%'}} />
            </colgroup>
            <tbody>
            {
                chartListRender()
            }
            </tbody>
        </table>
    )
}