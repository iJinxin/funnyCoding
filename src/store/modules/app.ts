import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface AppState {
  language: string
}

@Module({ dynamic: true, store, name: 'app'})
class App extends VuexModule implements AppState {
  public language = "";

  @Mutation
  private SET_LANGUAGE(language: string) {
    this.language = language
  }

  @Action
  public setLanguage(language: string) {
    this.SET_LANGUAGE(language)
  }
}

export const AppModule = getModule(App);