{/* <View
                        style={styles.Card}
                    >
                        {
                            (saldo <= saldoMax / 4) ? (
                                <>
                                    <Text
                                        style={styles.Titulo}
                                    >
                                        Meu progresso: Nível 1
                                    </Text>
                                    <View
                                        style={styles.Barra25}
                                    >
                                        <Image
                                            style={styles.Runner}
                                            source={require('../assets/runner.png')}
                                        />
                                        < LinearGradient
                                            // Barra de progresso.
                                            style={styles.Barra}
                                            colors={['#FE3032', '#FE3032']}
                                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                        >
                                            <Text
                                                style={styles.TextoBarra}
                                            >
                                                {saldo} pts.
                                            </Text>
                                        </LinearGradient>
                                        <Text
                                            style={styles.Nivel}
                                        >
                                            Nível 1
                                        </Text>
                                    </View>
                                </>
                            ) : (saldo <= saldoMax / 2) ? (
                                <>
                                    <Text
                                        style={styles.Titulo}
                                    >
                                        Meu progresso: Nível 2
                                    </Text>
                                    <View
                                        style={styles.Barra50}
                                    >
                                        <Image
                                            style={styles.Runner}
                                            source={require('../assets/runner.png')}
                                        />
                                        < LinearGradient
                                            // Barra de progresso.
                                            style={styles.Barra}
                                            colors={['#FE3032', '#AF596D']}
                                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                        >
                                            <Text
                                                style={styles.TextoBarra}
                                            >
                                                {saldo} pts.
                                            </Text>
                                        </LinearGradient>
                                    </View>
                                </>
                            ) : (saldo > saldoMax / 2 && saldo <= saldoMax / 4 * 3) ? (
                                <>
                                    <Text
                                        style={styles.Titulo}
                                    >
                                        Meu progresso: Nível 3
                                    </Text>
                                    <View
                                        style={styles.Barra75}
                                    >
                                        <Image
                                            style={styles.Runner}
                                            source={require('../assets/runner.png')}
                                        />
                                        < LinearGradient
                                            // Barra de progresso.
                                            style={styles.Barra}
                                            colors={['#FE3032', '#AF596D', '#5E82AA']}
                                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                        >
                                            <Text
                                                style={styles.TextoBarra}
                                            >
                                                {saldo} pts.
                                            </Text>
                                        </LinearGradient>
                                    </View>
                                </>
                            ) : (saldo > saldoMax / 4 * 3 && saldo < saldoMax) ? (
                                <>
                                    <Text
                                        style={styles.Titulo}
                                    >
                                        Meu progresso: Nível 4
                                    </Text>
                                    <View
                                        style={styles.End}
                                    >
                                    <Image
                                        style={styles.Runner}
                                        source={require('../assets/runner.png')}
                                    />
                                    < LinearGradient
                                        // Barra de progresso.
                                        style={styles.Barra}
                                        colors={['#FE3032', '#AF596D', '#5E82AA', '#17A7E0']}
                                        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                    >
                                        <Text
                                            style={styles.TextoBarra}
                                        >
                                            {saldo} pts.
                                        </Text>
                                    </LinearGradient>
                                    </View>
                                </>
                            ) : (saldo === saldoMax) ? (
                                <>
                                    <Text
                                        style={styles.Titulo}
                                    >
                                        Meu progresso: Você é o aluno com maior pontuação!
                                    </Text>
                                    <View
                                        style={styles.End}
                                    >
                                    <Image
                                        style={styles.Runner}
                                        source={require('../assets/reach.png')}
                                    />
                                    < LinearGradient
                                        // Barra de progresso.
                                        style={styles.Barra}
                                        colors={['#232D53', '#232D52', '#17A7E0']}
                                        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                    >
                                        <Text
                                            style={styles.TextoBarra}
                                        >
                                            {saldo} pts.
                                        </Text>
                                    </LinearGradient>
                                    </View>
                                </>
                            ) : <>
                            </>
                        }

                        <View
                            style={styles.ViewTextosBarra}
                        >
                            <Text
                                style={styles.Titulo}
                            >
                                0
                            </Text>
                            <Text
                                style={styles.Titulo}
                            >
                                {saldoMax}
                            </Text>
                        </View>
                    </View> */}