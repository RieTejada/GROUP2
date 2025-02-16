import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function About() {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>About</Text>

      {/* Quick Overview */}
      <Text style={styles.overview}>
      Welcome to our app! We're thrilled to have you here. This app is thoughtfully designed to assist you in learning and recognizing the flags of different countries from all over the world. Whether you're a student, a trivia enthusiast, or simply someone curious about global cultures, our app is here to make your learning journey both enjoyable and rewarding.
Our goal is to provide a seamless, interactive, and user-friendly experience tailored to your interests and learning needs. Dive into the fascinating world of flags with a variety of engaging features, including quizzes, fun facts, and historical insights about each flag.
We believe that learning should be exciting, and we’ve worked hard to create an app that’s not only educational but also entertaining. Expand your knowledge, challenge yourself, and impress your friends with your newfound expertise in world flags!
Thank you for choosing our app, and we can’t wait for you to explore everything we’ve prepared for you. Let’s get started on this exciting adventure together! 🌍✨


      </Text>

      {/* "About the Developers" Section */}
      <Text style={styles.subHeading}>About the Developers</Text>
      <View style={styles.cardsContainer}>
        {/* Developer Card 1 */}
        <View style={styles.card}>
          <Image 
            source={require('./../../assets/images/tine.png')} 
            style={styles.profileImage} 
          />
          <Text style={styles.cardName}>Christine Artucilla</Text>
          <Text style={styles.cardInfo}>Frontend Developer. Passionate about creating user-friendly interfaces.</Text>
        </View>

        {/* Developer Card 2 */}
        <View style={styles.card}>
          <Image 
            source={require('./../../assets/images/becca.png')} 
            style={styles.profileImage} 
          />
          <Text style={styles.cardName}>Rebecca Baja</Text>
          <Text style={styles.cardInfo}>Backend Developer. Enjoys solving complex problems and building robust systems.</Text>
        </View>

        {/* Developer Card 3 */}
        <View style={styles.card}>
          <Image 
            source={require('./../../assets/images/jm.png')} 
            style={styles.profileImage} 
          />
          <Text style={styles.cardName}>JM Tejada</Text>
          <Text style={styles.cardInfo}>Mobile Developer. Focused on crafting intuitive and seamless mobile experiences.</Text>
        </View>

        {/* Developer Card 4 */}
        <View style={styles.card}>
          <Image 
            source={require('./../../assets/images/FINALNAJANROLD.png')} 
            style={styles.profileImage} 
          />
          <Text style={styles.cardName}>Janrold Deguinto</Text>
          <Text style={styles.cardInfo}>UI/UX Designer. Dedicated to designing visually appealing and accessible designs.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background for contrast
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  overview: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'center',
    marginBottom: 30,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '45%', // Adjust card width to fit 2 cards per row
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  cardInfo: {
    fontSize: 14,
    color: '#d3d3d3',
    textAlign: 'center',
  },
});
