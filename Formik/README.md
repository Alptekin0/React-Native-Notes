# 📱 React Native Formik & Yup Form Uygulaması  
  
Bu proje, Formik ve Yup kullanarak React Native içerisinde form yönetimi ve form doğrulama işlemlerini gösteren basit bir örnektir.  
Kullanıcıdan email ve şifre bilgilerini alır, hatalı girişlerde anında hata mesajlarını görüntüler.  
  
## 🚀 Özellikler  
  
- Formik ile kolay form yönetimi  
- Yup ile güçlü doğrulama altyapısı   
- Custom TextInput bileşeni (`Giris`)    
- Gerçek zamanlı hata mesajları  
- KeyboardAwareScrollView ile klavye dostu arayüz  
- Temiz ve anlaşılır React Native & TypeScript yapısı  
  
## 🧩 Kullanılan Teknolojiler  
  
- React Native  
- Formik  
- Yup  
- TypeScript  
- react-native-keyboard-aware-scroll-view  
  
## 🧱 Bileşenler  
  
### Giris.tsx  
Kullanıcıdan veri almak için kullanılan özelleştirilmiş TextInput bileşeni.  
  
- `value` → input değeri  
- `placeholder` → placeholder yazısı  
- `keyboardType` → klavye tipi  
- `error` → hata mesajı  
- `onChangeText` → değişim fonksiyonu  
  
### Form.tsx  
- Formik ile form state yönetimi  
- Yup ile email ve şifre doğrulaması  
- Submit edildiğinde değerlerin konsola yazılması  