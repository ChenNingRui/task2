import React, { useEffect, useState } from 'react';
import Chart from "react-google-charts";

export default function CompareBarChart(props) {
    let { selectList, indexList } = props;
    let [showData, setShowData] = useState([]);

    useEffect(() => {
        // console.log(selectList);
        setShowData(dataHandle(selectList, indexList))
    }, [selectList, indexList]);

    let dataHandle = (select, index) => {
        let list = [];
        list.push(['Index', 'bore', 'stroke', 'compression-ratio']);
        for (let i = 0, length = select.length; i < length; i++) {
            list.push([index[i], select[i]['bore'], select[i]['stroke'], select[i]['compression-ratio']]);
        }

        return list;
    }

    return (
        <div style={{ display: 'flex', maxWidth: 500, maxHeight: 500 }}>
            <Chart
                width={'500px'}
                height={'500px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={showData}
                options={{
                    title: 'bore, stroke, compression-ratio comparison',
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Size',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Index',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}