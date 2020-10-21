import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";

export default function CompareLineChart(props) {
    let { selectList, indexList } = props;
    let [showData, setShowData] = useState([]);

    useEffect(() => {
        // console.log(selectList);
        setShowData(dataHandle(selectList, indexList))
    }, [selectList, indexList]);

    let dataHandle = (select, index) => {
        let list = [];
        list.push(['Index', 'highway-mpg', 'city-mpg']);
        for (let i = 0, length = select.length; i < length; i++) {
            list.push([index[i], select[i]['highway-mpg'], select[i]['city-mpg']]);
        }

        return list;
    }

    return (
        <div style={{ display: 'flex', maxWidth: 500, maxHeight: 500 }}>
            <Chart
                width={'500px'}
                height={'500px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={showData}
                options={{
                    hAxis: {
                        title: 'Index',
                    },
                    vAxis: {
                        title: 'mpg',
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}