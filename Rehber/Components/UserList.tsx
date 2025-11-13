import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import UserListUI from './UserListUI';

const UserList = () => {

     const DATA = [
          { title: 'A', data: ['Ali Alptekin', 'Ahmet Arslan', 'Ayla Aydın'] },
          { title: 'B', data: ['Burak Bilgin'] },
          { title: 'C', data: ['Cem Caner', 'Cansu Ceylan', 'Cemre Coşkun', 'Cihan Ceviz', 'Cemil Candan'] },
          { title: 'D', data: ['Deniz Demir', 'Derya Dursun'] },
          { title: 'E', data: ['Efe Ekici', 'Elif Eren', 'Ece Ersoy', 'Ezgi Elmas', 'Emre Erdoğan', 'Ekin Erkan'] },
          { title: 'F', data: ['Fatma Fidan', 'Furkan Fırat', 'Feyza Ferah'] },
          { title: 'G', data: ['Gizem Gür'] },
          { title: 'H', data: ['Hakan Hacıoğlu', 'Hilal Haydar', 'Hasan Hakan', 'Hülya Hancı'] },
          { title: 'I', data: ['Işıl Ilgaz', 'Ilgın Irmak', 'Işın Işıltı'] },
          { title: 'İ', data: ['İrem İpek', 'İlker İnan'] },
          { title: 'J', data: ['Jale Jandarma', 'Janset Jülide', 'Jülide Jale'] },
          { title: 'K', data: ['Kerem Kaya', 'Kübra Koç', 'Kaan Kaplan', 'Kenan Kılıç', 'Kevser Karaca', 'Kadir Karahan'] },
          { title: 'L', data: ['Leyla Lale', 'Levent Limon'] },
          { title: 'M', data: ['Mehmet Alptekin', 'Murat Mert', 'Melis Mutlu', 'Mine Memiş'] },
          { title: 'N', data: ['Nazlı Narin', 'Nejat Nergis', 'Nisa Narin', 'Nihat Noyan', 'Nil Nehir'] },
          { title: 'O', data: ['Okan Orhan'] },
          { title: 'Ö', data: ['Öykü Özdemir', 'Ömer Öztürk', 'Özlem Özkan', 'Özgür Öztürk'] },
          { title: 'P', data: ['Pelin Pekcan', 'Poyraz Pala', 'Pınar Parlak'] },
          { title: 'R', data: ['Rıza Renkli', 'Rana Rüzgar'] },
          { title: 'S', data: ['Selin Sarı', 'Seda Sayın', 'Sami Sezer', 'Sinem Sönmez', 'Suat Şahin', 'Serkan Soylu'] },
          { title: 'Ş', data: ['Şule Şahin'] },
          { title: 'T', data: ['Tolga Tan', 'Tuba Taş', 'Tuna Tekin'] },
          { title: 'U', data: ['Umut Uçar', 'Uğur Uzun', 'Ulya Uslu', 'Ufuk Ulusoy', 'Uraz Usta'] },
          { title: 'Ü', data: ['Ümit Ünsal'] },
          { title: 'V', data: ['Veli Varol', 'Volkan Vural', 'Vildan Vatansever', 'Vahide Vural'] },
          { title: 'Y', data: ['Yasemin Yıldız', 'Yusuf Yalçın'] },
          { title: 'Z', data: ['Zeynep Alptekin', 'Zeki Zengin', 'Zuhal Zeren', 'Zeynep Zorlu', 'Zafer Zeyrek'] },
     ];



     return (
          <View style={styles.container}>
               <View style={styles.title}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}> REHBER UYGULAMASI </Text>
               </View>
               <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <UserListUI item={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                         <Text style={styles.header}>{title}</Text>
                    )}
                    showsVerticalScrollIndicator={false}
               />
          </View>
     );
};

export default UserList;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          padding: 16,
          marginBottom: 50,
          marginTop: 50,
          width: "100%",
          height: "100%",
     },
     title: {
          width: "100%",
          height: "8%",
          alignItems: "center",
          justifyContent: "flex-start"
     },
     header: {
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          color: '#222',
     },
});
