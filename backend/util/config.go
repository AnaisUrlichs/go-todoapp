package util

import ( "github.com/spf13/viper" )

type Config struct {
    Username      string `mapstructure:"USERNAME"`
    Password      string `mapstructure:"PASSWORD"`
	Host      	  string `mapstructure:"HOST"`
    Name          string `mapstructure:"NAME"`
}

func LoadConfig() (config Config, err error) {
    viper.AddConfigPath(".")
    viper.SetConfigName("app")
    viper.SetConfigType("env")

    viper.AutomaticEnv()

    err = viper.ReadInConfig()
    if err != nil {
        return
    }

    err = viper.Unmarshal(&config)
    return
}

