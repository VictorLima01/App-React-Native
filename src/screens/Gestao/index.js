import React from 'react';
import {
   SafeAreaView,
   Text,
   View,
   StyleSheet,
   Dimensions,
   ScrollView, 
} from 'react-native';
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    ListArea,
    Area,
    InfoArea,
    InfoName,
    HeaderTitlePage,
    HeaderAreaPage
} from './style';
import { BarChart, PieChart} from 'react-native-chart-kit';
import  {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const MyBarChart = () => {
   return (
     <>
       <Text style={styles.header}></Text>
       <BarChart
         data={{
           labels: ['January', 'February', 'March', 'April', 'May', 'June'],
           datasets: [
             {
               data: [20, 45, 28, 80, 99, 43],
             },
           ],
         }}
         width={Dimensions.get('window').width - 100}
         height={200}
         yAxisLabel={'R$'}
         chartConfig={{
           backgroundColor: '#1cc910',
           backgroundGradientFrom: '#eff3ff',
           backgroundGradientTo: '#efefef',
           decimalPlaces: 2,
           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
           style: {
             borderRadius: 16,
           },
         }}
         style={{
           marginVertical: 8,
           borderRadius: 16,
          // marginHorizontal: 30
         }}
       />
     </>
   );
 };
 const MyPieChart = () => {
   return (
     <>
       <Text style={styles.header}></Text>
       <PieChart
         data={[
           {
             name: 'Seoul',
             population: 21500000,
             color: 'rgba(131, 167, 234, 1)',
             legendFontColor: '#7F7F7F',
             legendFontSize: 10,
           },
           {
             name: 'Toronto',
             population: 2800000,
             color: '#F00',
             legendFontColor: '#7F7F7F',
             legendFontSize: 10,
           },
           {
             name: 'New York',
             population: 8538000,
             color: '#0A9C31',
             legendFontColor: '#7F7F7F',
             legendFontSize: 10,
           },
           {
             name: 'Moscow',
             population: 11920000,
             color: 'rgb(0, 0, 255)',
             legendFontColor: '#7F7F7F',
             legendFontSize: 10,
           },
         ]}
         width={Dimensions.get('window').width - 70}
         height={220}
         chartConfig={{
           backgroundColor: '#1cc910',
           backgroundGradientFrom: '#eff3ff',
           backgroundGradientTo: '#efefef',
           decimalPlaces: 2,
           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
           style: {
             borderRadius: 16,
           },
         }}
         style={{
           marginVertical: 8,
           borderRadius: 16,
         }}
         accessor="population"
         backgroundColor="transparent"
         paddingLeft="15"
         absolute //for the absolute number remove if you want percentage
       />
     </>
   );
 };
export default () => {
    return (
        <Container>
            <Scroller>
            <HeaderArea>
                    <HeaderTitlePage style={{marginTop: 35}}  numberOfLines={2}>
                    Gestão</HeaderTitlePage >    
           </HeaderArea>
           <HeaderArea style={{marginTop: -55}}>
                    <HeaderTitle numberOfLines={2}>
                    <Ionicons style={{marginRight: 10}} name="analytics" size={20} color="#FFF" />
                      Serviços/ Gestão</HeaderTitle>    
           </HeaderArea>
             <Area>
                 <InfoArea>
                 <InfoName style={styles.titulo}>
                    Vendas por ano</InfoName>
                 <SafeAreaView style={{flex: 1}}>
                       <ScrollView>
                           <View style={styles.container}>
                            <View>
                            {/* <InfoName>Bar chart</InfoName> */}
                                   <MyBarChart />
                               </View>
                           </View>
                   </ScrollView>
               </SafeAreaView>
            </InfoArea>
          </Area>
          <Area>
                 <InfoArea>
                 <InfoName style={styles.titulo}>
                    Vendas por região</InfoName>
                 <SafeAreaView style={{flex: 1}}>
                       <ScrollView>
                           <View style={styles.container}>
                            <View>
                            {/* <InfoName>Pie chart</InfoName> */}
                                   <MyPieChart />
                               </View>
                           </View>
                   </ScrollView>
               </SafeAreaView>
            </InfoArea>
          </Area>
           {/* <Area>
               <InfoArea>
                    <InfoName>Indicadores</InfoName>
                    <InfoName>
                    <SafeAreaView style={{flex: 1}}>
                       <ScrollView>
                           <View style={styles.container}>
                            <View>
                            <InfoName>Bar chart</InfoName>
                                   <MyBarChart />
                            <InfoName>Pie chart</InfoName>
                                   <MyPieChart />
                               </View>
                           </View>
                   </ScrollView>
               </SafeAreaView>
             </InfoName>
           </InfoArea>
       </Area> */}
             
            </Scroller>
        </Container>
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'center',
     textAlign: 'center',
     padding: 10,
   },
   header: {
     textAlign: 'center',
     fontSize: 18,
     padding: 16,
     marginTop: 16,
   },
   lineStyle:{
       borderWidth: 0.2,
       borderColor:'grey',
       justifyContent: 'center',
       marginTop: 15
  }, 
  icon:{
   marginTop: 15,
   justifyContent: 'space-between',
   position: 'absolute', 
   marginRight: 20,
   right: 0,
   padding: 20,
 }, titulo:{
   color: "#442357",
   fontSize: 20,
 }
 , descricao:{
   color: "grey",
   fontSize: 15,
   marginTop: 15
 }
 });