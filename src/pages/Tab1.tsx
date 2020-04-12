import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonCardContent } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import { AdOptions, AdSize, AdPosition } from 'capacitor-admob';
import './Tab1.css';
const { AdMob, Toast } = Plugins;

class Tab1 extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    AdMob.initialize('ca-app-pub-3940256099942544~3347511713');
  }
  showBanner() {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/6300978111',
      adSize: AdSize.SMART_BANNER,
      position: AdPosition.BOTTOM_CENTER,
      hasTabBar: false,  // make it true if you have TabBar Layout.
      tabBarHeight: 56  // you can assign custom margin in pixel default is 56
    };

    // Show Banner Ad
    AdMob.showBanner(options)
      .then(
        async (value: any) => {
          console.log(value);  // true
          await Toast.show({
            text: 'Showing Banner AD.'
          })
        },
        (error: any) => {
          console.error(error); // show error
        }
      );


    // Subscibe Banner Event Listener
    AdMob.addListener('onAdLoaded', async (info: boolean) => {
      console.log('Showing Banner AD.');
    });
  }
  // This Banner AD have bottom margin to avoid TabBar Overlaping for TabBar 
  showTabBarBanner() {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/6300978111',
      adSize: AdSize.SMART_BANNER,
      position: AdPosition.BOTTOM_CENTER,
      hasTabBar: true,  // make it true if you have TabBar Layout.
      tabBarHeight: 56  // you can assign custom margin in pixel default is 56
    };

    // Show Banner Ad
    AdMob.showBanner(options)
      .then(
        async (value: any) => {
          console.log(value);  // true
          await Toast.show({
            text: 'Showing Banner AD.'
          })
        },
        (error: any) => {
          console.error(error); // show error
        }
      );


    // Subscibe Banner Event Listener
    AdMob.addListener('onAdLoaded', async (info: boolean) => {
      console.log('Showing TabBar Banner AD.');
    });
  }
  hideBanner() {

    AdMob.hideBanner().then(
      async (value: any) => {
        await Toast.show({
          text: 'Banner AD Hidden'
        })
        console.log(value);  // true
      },
      (error: any) => {
        console.error(error); // show error
      }
    );
  }
  resumeBanner() {
    // Resume the banner, show it after hide

    AdMob.resumeBanner().then(
      (value: any) => {
        console.log(value);  // true
      },
      (error: any) => {
        console.error(error); // show error
      }
    );
  }
  removeBanner() {
    // Destroy the banner, remove it from screen.

    AdMob.removeBanner().then(
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
            <IonTitle>Banner Ads</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Banner Ads</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
            <IonCardContent>Banner Ad is usually shown by default on bottom of the page. You can select the position as you like.
      You can even display multiple banner ads per page.</IonCardContent>
          </IonCard>
          <IonButton expand="block" className="ion-margin-bottom" color="success" onClick={this.showTabBarBanner}>Show Banner Ad</IonButton>
          <IonButton expand="block" className="ion-margin-bottom" color="medium" onClick={this.hideBanner}>Hide Banner Ad</IonButton>
          <IonButton expand="block" className="ion-margin-bottom" color="success" onClick={this.resumeBanner}>Resume Banner Ad</IonButton>
          <IonButton expand="block" className="ion-margin-bottom" color="danger" onClick={this.removeBanner}>Remove Banner Ad</IonButton>
        </IonContent>
      </IonPage>
    );
  };
}

export default Tab1;
