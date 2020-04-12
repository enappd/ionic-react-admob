import React from 'react';
import { IonContent, IonHeader, IonPage, IonRow, IonToolbar, IonItem, IonLabel, IonImg, IonGrid, IonBackButton, IonButton } from '@ionic/react';
import './Home.css';
import enappdWhite from '../assets/enappd_white.png';
import admob from '../assets/admob.png';

const home = () => {
  window.open('https:/store.enappd.com', '_blank')
}
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="content">
          <IonImg src={admob} className="admob-img" />
          <div className="home-title">
            <IonGrid>
              <IonRow className="home-subtitle">
                Ionic React Capacitor
              </IonRow>
              <IonRow className="home-title">
                AdMob Implementation
              </IonRow>
            </IonGrid>
          </div>
          <div className="home-buttons">
            <IonButton color="success" onClick={home}>More Ionic Templates</IonButton>
            <IonButton color="danger" routerLink="/tab1">Skip to AdMob Example</IonButton>
          </div>
          <div className="bottom">
            <IonImg src={enappdWhite} />
          </div>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
