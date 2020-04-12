import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonCardContent, IonListHeader } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import { AdOptions } from 'capacitor-admob';
import './Tab2.css';
const { AdMob, Toast } = Plugins;

class Tab2 extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    AdMob.initialize('ca-app-pub-3940256099942544~3347511713');
  }

  loadInterstitial() {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/1033173712',
      autoShow: false
    }
    AdMob.prepareInterstitial(options)
      .then(
        async (value: any) => {
          if (value) {
            await Toast.show({
              text: 'Interstitial AD Loaded'
            });
          }
          console.log(value);  // true
        },
        (error: any) => {
          console.error(error); // show error
        }
      );
  }
  showInterstitial() {
    AdMob.showInterstitial().then(
      (value: any) => {
        console.log(value);  // true
      },
      (error: any) => {
        console.error(error); // show error
      }
    );
  }
  loadInterstitialVideo() {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/8691691433',
      autoShow: false
    }
    AdMob.prepareInterstitial(options)
      .then(
        async (value: any) => {

          if (value) {
            await Toast.show({
              text: 'Interstitial AD Loaded'
            });
          }

          console.log(value);  // true
        },
        (error: any) => {
          console.error(error); // show error
        }
      );
  }
  showInterstitialVideo() {
    AdMob.showInterstitial().then(
      (value: any) => {
        console.log(value);  // true
      },
      (error: any) => {
        console.error(error); // show error
      }
    );
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="dark">
            <IonTitle>Interstitial Ads</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Interstitial Ads</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            <IonCardContent>Interstitial ads are full-screen ads that cover the interface of their host app. You should display them at
      natural transition points in the flow of an app.</IonCardContent>
          </IonCard>
          <IonButton expand="block" className="ion-margin-bottom" color="primary" onClick={this.loadInterstitial}>Load Interstitial Ad</IonButton>
          <IonButton expand="block" className="ion-margin-bottom" color="success" onClick={this.showInterstitial}>Show Interstitial Ad</IonButton>
          <IonListHeader></IonListHeader>
          <IonButton expand="block" className="ion-margin-bottom ion-margin-top" color="primary" onClick={this.loadInterstitialVideo}>Load Interstitial Video Ad</IonButton>
          <IonButton expand="block" className="ion-margin-bottom" color="success" onClick={this.showInterstitialVideo}>Show Interstitial Video Ad</IonButton>
        </IonContent>
      </IonPage>
    );
  };
}

export default Tab2;
