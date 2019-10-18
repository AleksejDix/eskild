<template>
  <div>
    <h1>Terminwunsch</h1>
     <hr class="border-t-4 border-teal-500 rounded my-6">

    <div>
      <div class="markdown">
        <p>Wir stehen nach Terminvereinbarung auch abends und samstags zur Verfügung.</p>
        <p>Nicht nur Diabetiker sind herzlich willkommen, auch ganz normale Füße werden mit großer Sorgfallt behandelt. Sie haben eine Frage rund um den Fuß, dann rufen Sie uns an  <a href="tel:052816218444">052816218444</a>  oder schreiben Sie uns eine <a href="mailto:info@podologie-bad-pyrmont.de">Mail</a> über das <a href="#formular">Kontaktforumular</a>.</p>

        <p>Für einen Termin rufen Sie uns bitte an, damit wir den für Sie richtigen Termin schnellst möglich vereinbaren können.</p>

        <p>Natürlich gilt das auch für Haus- und Heimbesuche.</p>

        <p>
          Da wir die Praxis als reine Bestellpraxis führen können wir auch individuell Termine anbieten.</p>
 <p>
Für Neupatienten nehmen wir uns 60 min. Zeit, daher kann es zu Wartezeiten auf einen Aufnahmetermin kommen, bitte haben Sie hierfür Verständnis.</p>
        </p>
      </div>
      <section>
        <h2>
          <a id="formular" href="#formular">Kontaktformular</a>
        </h2>
        <FormContact/>
      </section>
     </div>
  </div>
</template>

<script>
import FormContact from './../components/FormContact'
export default {
  components: {
    FormContact
  }
}
</script>

<style>

</style>
