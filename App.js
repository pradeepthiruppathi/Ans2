import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

export default function ViewProfileScreen() {
    const profile = {
        name: "S.Meena",
        gender: "F",
        age: 23,
        patientID: "87 20200727153457",
        phone: "8022334455",
        email: "meenarabinsachin2@gmail.com",
        affectedSide: "Bilateral",
        condition: "Ortho",
        speciality: "Osteoarthritis",
        medicalHistory: "Hypertension, DM, Hypothyroidism",
        goalReached: 40
    };

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text style={styles.navBarTitle}>View patient</Text>
            </View>

            <View style={styles.profileSection}>
                <Text style={styles.profileText}>{`${profile.name}, ${profile.gender}/${profile.age}`}</Text>
                <Text style={styles.patientID}>{`Patient ID: ${profile.patientID}`}</Text>
                <Image source={{ uri: 'url_to_profile_picture' }} style={styles.profilePicture} />
            </View>

            <View style={styles.goalCard}>
                <Text style={styles.goalText}>Goal reached</Text>
                <ProgressCircle style={styles.progressCircle} progress={profile.goalReached / 100} />
                <Text style={styles.goalPercentage}>{`${profile.goalReached}%`}</Text>
                <View style={styles.metrics}>
                    <Text style={styles.metric}>EMG</Text>
                    <Text style={styles.metric}>ROM</Text>
                </View>
            </View>

            <View style={styles.detailsSection}>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Phone no.</Text>
                    <Text style={styles.detailValue}>{profile.phone}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Mail ID</Text>
                    <Text style={styles.detailValue}>{profile.email}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Affected side</Text>
                    <Text style={styles.detailValue}>{profile.affectedSide}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Condition</Text>
                    <Text style={styles.detailValue}>{profile.condition}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailTitle}>Speciality</Text>
                    <Text style={styles.detailValue}>{profile.speciality}</Text>
                </View>
                <TouchableOpacity style={styles.medicalHistory}>
                    <Text style={styles.medicalHistoryText}>Medical history</Text>
                    <Text style={styles.medicalHistoryDetails}>{profile.medicalHistory}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    navBar: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003366', // Primary Blue
    },
    navBarTitle: {
        color: '#FFF',
        fontSize: 18,
    },
    profileSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    profileText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    patientID: {
        color: '#666',
        fontSize: 14,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#CCC',
    },
    goalCard: {
        backgroundColor: '#003366',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    goalText: {
        color: '#FFF',
        fontSize: 16,
    },
    progressCircle: {
        height: 100,
        width: 100,
        marginVertical: 10,
    },
    goalPercentage: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    metrics: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    metric: {
        color: '#FFF',
        fontSize: 14,
    },
    detailsSection: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    detailTitle: {
        fontSize: 16,
        color: '#333',
    },
    detailValue: {
        fontSize: 16,
        color: '#666',
    },
    medicalHistory: {
        marginTop: 20,
    },
    medicalHistoryText: {
        fontSize: 16,
        color: '#003366', // Primary Blue
    },
    medicalHistoryDetails: {
        marginTop: 10,
        color: '#666',
    },
});
