import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonCardContent } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import { AdOptions } from 'capacitor-admob';
import './Tab3.css';
const { AdMob, Toast } = Plugins;

class Tab3 extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    AdMob.initialize('ca-app-pub-3940256099942544~3347511713');
  }
  prepareRewardVideo() {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/5224354917'
    }
    // Prepare ReWardVideo
    AdMob.prepareRewardVideoAd(options)
      .then(
        async (value: any) => {
          if (value) {
            await Toast.show({
              text: 'Reward Video AD Loaded'
            });
          }
          console.log(value);  // true
        },
        (error: any) => {
          console.error(error); // show error
        }
      );
  }

  showRewardVideo() {
    // Show a RewardVideo AD
    AdMob.showRewardVideoAd().then(
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
            <IonTitle>Reward Ads</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Reward Ads</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            <IonCardContent>Rewarded ads are ads that users have the option of interacting with in exchange for in-app rewards.</IonCardContent>
          </IonCard>
          <IonButton expand="block" className="ion-margin-bottom" color="primary" onClick={this.prepareRewardVideo}>Load Reward Ad</IonButton>
          <IonButton expand="block" className="ion-margin-bottom" color="success" onClick={this.showRewardVideo}>Show Reward Ad</IonButton>
        </IonContent>
      </IonPage>
    );
  };
}

export default Tab3;
