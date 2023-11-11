import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'STT',
        width: '10%',
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Tên bài thi',
        width: '30%',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Thời gian thi',
        width: '30%',
        dataIndex: 'time',
        key: 'time',
        fixed: 'left',
    },
    {
        // title: 'Chỉnh sửa',
        key: 'operation',
        fixed: 'right',
        width: '30%',
        render: () => <a>Chỉnh sửa</a>,
    },
    {
        // title: 'Danh sách các bài nộp',
        key: 'operation',
        fixed: 'right',
        width: '30%',
        render: () => <a>Danh sách các bài nộp</a>,
    },
];
const data = [
    {
        key: '1',
        name: 'PPL',
        time: '9h00 11/11/2023',
    },
    {
        key: '2',
        name: 'DSA',
        time: '10h00 11/11/2023',
    },
];
const App = () => (
    <div style={{ width: '60%', margin: 'auto'}}>
        <h2 style={{ textAlign: 'center' }}>Danh sách các bài thi</h2>
        <Table
            columns={columns}
            dataSource={data}
            scroll={{
                x: 900,
            }}
        />
    </div>
);
export default App;