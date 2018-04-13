# State Management, Component Hierarchy and Props with Vue.js

### Overview
* All state will live in the rockets component
* Data will be passed as props to child components
* Child components will call functions in parent components
* API: https://rockets.now.sh/

```html
<app>
  <rockets>
    <new-rocket-form
      :addRocket="addRocket">
    </new-rocket-form>
    <rocket-list
      :rockets="rockets"
      :removeRocket="removeRocket">
      <rocket
        :rocket="rocket"
        :removeRocket="removeRocket">
      </rocket>
    </rocket-list>
  </rockets>
</app>
```

Stretch
---
* Convert to vuex
* Refactor player score counter, todo app, reddit clone app to use more components
* Refactor player score counter, todo app, reddit clone app to use vuex
