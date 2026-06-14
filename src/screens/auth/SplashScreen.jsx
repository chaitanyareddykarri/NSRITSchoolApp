import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    StatusBar,
    Image,
} from 'react-native';

const SplashScreen = ({ onFinish }) => {
    // Animation Refs
    const logoScale = useRef(new Animated.Value(0.7)).current;
    const logoOpacity = useRef(new Animated.Value(0)).current;

    const titleOpacity = useRef(new Animated.Value(0)).current;
    const titleTranslateY = useRef(new Animated.Value(20)).current;

    const dividerScaleX = useRef(new Animated.Value(0)).current;
    const mottoOpacity = useRef(new Animated.Value(0)).current;

    const sanskritOpacity = useRef(new Animated.Value(0)).current;
    const taglineOpacity = useRef(new Animated.Value(0)).current;
    
    const systemOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Run overlapping realistic animations
        Animated.parallel([
            // 1. Logo scale & fade
            Animated.parallel([
                Animated.spring(logoScale, {
                    toValue: 1,
                    tension: 50,
                    friction: 8,
                    useNativeDriver: true,
                }),
                Animated.timing(logoOpacity, {
                    toValue: 1,
                    duration: 600,
                    useNativeDriver: true,
                }),
            ]),

            // 2. Title fade & slide up (starts at t=250ms)
            Animated.sequence([
                Animated.delay(250),
                Animated.parallel([
                    Animated.timing(titleOpacity, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(titleTranslateY, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ]),
            ]),

            // 3. Motto & Dividers expand (starts at t=450ms)
            Animated.sequence([
                Animated.delay(450),
                Animated.parallel([
                    Animated.timing(dividerScaleX, {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: true,
                    }),
                    Animated.timing(mottoOpacity, {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: true,
                    }),
                ]),
            ]),

            // 4. Sanskrit & Tagline fade (starts at t=650ms)
            Animated.sequence([
                Animated.delay(650),
                Animated.parallel([
                    Animated.timing(sanskritOpacity, {
                        toValue: 1,
                        duration: 450,
                        useNativeDriver: true,
                    }),
                    Animated.timing(taglineOpacity, {
                        toValue: 1,
                        duration: 450,
                        useNativeDriver: true,
                    }),
                ]),
            ]),

            // 5. System Footer & Loading dots fade (starts at t=850ms)
            Animated.sequence([
                Animated.delay(850),
                Animated.timing(systemOpacity, {
                    toValue: 1,
                    duration: 450,
                    useNativeDriver: true,
                }),
            ]),
        ]).start(() => {
            // Short hold delay of 1200ms before transition (Total duration = 1300ms + 1200ms = 2.5 seconds)
            setTimeout(() => {
                onFinish?.();
            }, 1500);
        });
    }, [
        logoScale,
        logoOpacity,
        titleOpacity,
        titleTranslateY,
        dividerScaleX,
        mottoOpacity,
        sanskritOpacity,
        taglineOpacity,
        systemOpacity,
        onFinish
    ]);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#FFFFFF"
                barStyle="dark-content"
            />

            {/* Main Branding Content */}
            <View style={styles.content}>
                {/* Crest Logo */}
                <Animated.View
                    style={{
                        opacity: logoOpacity,
                        transform: [{ scale: logoScale }],
                    }}
                >
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </Animated.View>

                {/* School Title Block */}
                <Animated.View
                    style={[
                        styles.titleContainer,
                        {
                            opacity: titleOpacity,
                            transform: [{ translateY: titleTranslateY }],
                        }
                    ]}
                >
                    <Text 
                        style={styles.schoolName}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                    >
                        NADIMPALLI SATYANARAYANA RAJU
                    </Text>

                    {/* Divider Row 1 (Line with green dots) */}
                    <View style={styles.dividerRow}>
                        <View style={styles.greenDot} />
                        <Animated.View style={[styles.line, { transform: [{ scaleX: dividerScaleX }] }]} />
                        <View style={styles.greenDot} />
                    </View>

                    <Text 
                        style={styles.schoolSubName}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                    >
                        INTERNATIONAL TECHNO SCHOOL
                    </Text>
                </Animated.View>

                {/* Motto & Taglines Block */}
                <Animated.View style={[styles.mottoContainer, { opacity: mottoOpacity }]}>
                    {/* Motto */}
                    <Text style={styles.motto}>
                        UNITY • LEARNING • GROWTH
                    </Text>

                    {/* Sanskrit Row with lines on both sides and green dots */}
                    <View style={styles.sanskritRow}>
                        <View style={styles.greenDot} />
                        <Animated.View style={[styles.lineHalf, { transform: [{ scaleX: dividerScaleX }] }]} />
                        
                        <Animated.Text style={[styles.sanskritText, { opacity: sanskritOpacity }]}>
                            ज्ज्ञानं परमं बलम्
                        </Animated.Text>
                        
                        <Animated.View style={[styles.lineHalf, { transform: [{ scaleX: dividerScaleX }] }]} />
                        <View style={styles.greenDot} />
                    </View>

                    {/* English Tagline */}
                    <Animated.Text style={[styles.tagline, { opacity: taglineOpacity }]}>
                        Knowledge is the supreme strength
                    </Animated.Text>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    titleContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },

    mottoContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },

    logo: {
        width: 200,
        height: 320,
        marginBottom: 15,
    },

    schoolName: {
        color: '#1F3E66',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'serif',
        letterSpacing: 0.5,
        textAlign: 'center',
        width: '100%',
    },

    schoolSubName: {
        color: '#1F3E66',
        fontSize: 13.5,
        fontWeight: 'bold',
        letterSpacing: 2.2,
        textAlign: 'center',
        width: '100%',
    },

    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
    },

    sanskritRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginTop: 12,
        marginBottom: 12,
    },

    greenDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#3DAE49',
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#4A607A',
        marginHorizontal: 10,
    },

    lineHalf: {
        flex: 1,
        height: 1,
        backgroundColor: '#4A607A',
        marginHorizontal: 10,
    },

    motto: {
        color: '#3DAE49',
        fontSize: 13,
        letterSpacing: 3,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    sanskritText: {
        color: '#1F3E66',
        fontSize: 16.5,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10,
    },

    tagline: {
        color: '#3DAE49',
        fontSize: 12.5,
        fontWeight: '600',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 6,
    },
});

export default SplashScreen;