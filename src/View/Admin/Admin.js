/**
 * Created by Mak on 2017/4/3.
 */
import React ,{Component} from 'react';
import { Table,Button} from 'antd-mobile';

const columns = [
    { title: '标题', dataIndex: 'title', key: 'title', width: '2rem', fixed: 'left' },
    { title: '姓名', dataIndex: 'a', key: 'a', width: '5rem' },
    { title: '年龄', dataIndex: 'b', key: 'b', width: '1rem' },
    { title: '身高', dataIndex: 'c', key: 'c', width: '1rem' },
    { title: '体重', dataIndex: 'd', key: 'd', width: '1rem' },
    { title: '爱好', dataIndex: 'a', key: 'e', width: '1rem' },
    { title: '生日', dataIndex: 'b', key: 'f', width: '1rem' },
    { title: '住址', dataIndex: 'b', key: 'g', width: '1rem' },
    { title: '电话', dataIndex: 'b', key: 'h', width: '1rem' },
    { title: '邮编', dataIndex: 'b', key: 'i', width: '1rem' },
    { title: '其他', dataIndex: 'b', key: 'j', width: '1rem' },
];

var data = [
    { title: '人物1', a: '二321321321321321321321321321321321321哈', b: '32', d: 3, key: '1' },
    { title: '人物2', a: '小明', b: '98', d: 3, key: '2' },
    { title: '人物3', a: '猪头', c: '16', d: 2, key: '3' },
    { title: '人物4', a: '小二', c: '33', d: 2, key: '4' },
];

const data2 = [
    { title: '人物11', a: '二321321321321321321321321321321321321哈', b: '32', d: 3, key: '5' },
    { title: '人物21', a: '小明', b: '98', d: 3, key: '6' },
    { title: '人物31', a: '猪头', c: '16', d: 2, key: '7' },
    { title: '人物41', a: '小二', c: '33', d: 2, key: '8' },
];

class Admin extends Component{

    state = {
        data: data,
    }

    add(){
        const _this = this;
        var tt =_this.state.data.concat(data2);
        this.setState({data:tt});
        // this.state.data = this.state.data.concat(data2);
        console.log(tt)
    }

    render(){
        return(
            <div className="Admin">
                <Table
                    titleFixed={true}
                    columns={columns}
                    dataSource={this.state.data}
                    direction="mix"
                    scrollX={true}
                />
                <Button className="btn" onClick={e=>this.add()}>12321</Button>
            </div>
        );
    }
}

export default Admin;