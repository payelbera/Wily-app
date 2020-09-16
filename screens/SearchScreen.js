import React from 'react';
import {Text,View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import db from '../config'

export default class SearchScreen extends React.Component{
constructor(props){
    super(props);
    this.state={
        allTransactions:[]
    }
}
componentDidMount =async()=>{
const query = await db.collection("transaction").get();
console.log("query is "+query.docs)
query.docs.map((doc)=>{
    console.log("in map")
    this.setState({
        allTransactions:[...this.state.allTransactions,doc.data()]
    })
    console.log("query details "+doc.data())
})
//alert("cdm")
}
render(){
    return(
        <ScrollView>
            <Text>Before scroll</Text>

            {console.log(this.state.allTransactions)}
            {this.state.allTransactions.map((transaction,index)=>{
                return(
            <View key = {index} style ={{borderBottomWidth:2}}>
                <Text>{"Book Id: "+transaction.bookId}</Text>
                <Text>{"Student Id: "+transaction.studentId}</Text>
                <Text>{"Txn type: "+transaction.transactionType}</Text>
                <Text>{"Date: "+transaction.date.toDate()}</Text>
            </View>
                )
            })}
            

        </ScrollView>
        
    );
}

}