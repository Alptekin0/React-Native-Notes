import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Giris } from "../copmponents";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const schema = Yup.object({
     email: Yup.string().email("Geçersiz E-mail Adresi").required("E-mail Alanı Zorunludur."),
     sifre: Yup.number().required("Sifre alanı zorunludur."),
})

const Form = () => {

     return (

          <KeyboardAwareScrollView
               enableOnAndroid
               extraHeight={150}
               contentContainerStyle={{ flexGrow: 1, padding: 20 }}
               keyboardShouldPersistTaps="handled"
               style={{ flex: 1 }}
          >
               <Formik
                    initialValues={{ email: "", sifre: "" }}
                    validationSchema={schema}
                    onSubmit={(values) => console.log(values)}
               >
                    {({ handleChange, handleSubmit, values, errors }) => (
                         <View style={styles.container}>
                              <Text style={styles.Title}>GİRİŞ YAP</Text>

                              <Giris
                                   value={values.email}
                                   placeholder="Email..."
                                   keyboardType="email-address"
                                   error={errors.email}
                                   onChangeText={handleChange("email")}
                              />

                              <Giris
                                   value={values.sifre}
                                   placeholder="Şifre..."
                                   keyboardType="numeric"
                                   error={errors.sifre}
                                   onChangeText={handleChange("sifre")}
                              />

                              <View>

                                   <Button title="Giriş Yap" onPress={handleSubmit as any} />
                                   <Button title="Kaydol" onPress={handleSubmit as any} />

                              </View>
                         </View>
                    )}
               </Formik>
          </KeyboardAwareScrollView>

     )
};

export default Form

const styles = StyleSheet.create({
     container: {
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          gap: "4%"
     },
     Title: {
          fontSize: 30,
          fontWeight: "bold",
     },
})