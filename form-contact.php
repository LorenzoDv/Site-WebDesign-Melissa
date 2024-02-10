<?php
session_start();

require_once(__DIR__ . '/vendor/autoload.php');
$configApi = require_once(__DIR__ . '/config/config-api.php');

$apiKey = $configApi['api_key'];
$partnerKey = $configApi['partner_key'];

// Configurer les clés d'API
$config = Brevo\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', $apiKey);
$config = Brevo\Client\Configuration::getDefaultConfiguration()->setApiKey('partner-key', $partnerKey);

$apiInstance = new Brevo\Client\Api\TransactionalEmailsApi(
    new GuzzleHttp\Client(),
    $config
);

// Retrieve form data
$name = filter_var(isset($_POST['nom']) ? $_POST['nom'] : '', FILTER_SANITIZE_STRING);
$prenom = filter_var(isset($_POST['prenom']) ? $_POST['prenom'] : '', FILTER_SANITIZE_STRING);
$email = filter_var(isset($_POST['email']) ? $_POST['email'] : '', FILTER_VALIDATE_EMAIL);
$objet = filter_var(isset($_POST['objet']) ? $_POST['objet'] : '', FILTER_SANITIZE_STRING);
$message = filter_var(isset($_POST['message']) ? $_POST['message'] : '', FILTER_SANITIZE_STRING);

// Apply utf8_encode where necessary
$name = utf8_encode($name);
$prenom = utf8_encode($prenom);
$email = utf8_encode($email);
$objet = utf8_encode($objet);
$message = utf8_encode($message);

// Construct the email content
$htmlContent = "<html><body><h2 style='color: #a05c5c'>Message du formulaire de contact</h2>";
$htmlContent .= "<p><strong>Nom:</strong> $name</p>";
$htmlContent .= "<p><strong>Prénom:</strong> $prenom</p>";
$htmlContent .= "<p><strong>Email:</strong> $email</p>";
$htmlContent .= "<p><strong>Objet:</strong> $objet</p>";
$htmlContent .= "<p><strong>Message:</strong> $message</p>";
$htmlContent .= "</body></html>";

// Construct the email sending code
$sendSmtpEmail = new \Brevo\Client\Model\SendSmtpEmail([
    'subject' => html_entity_decode($objet),
    'sender' => ['name' => 'Formulaire Site', 'email' => 'contact@melissa-piana.fr'],
    'replyTo' => ['name' => '' . html_entity_decode($name) . html_entity_decode($prenom), 'email' => '' . html_entity_decode($email) . ''],
    'to' => [['name' => 'Melissa Piana', 'email' => 'contact@melissa-piana.fr']],
    'htmlContent' => $htmlContent,
]);

// Send email
try {
    $result = $apiInstance->sendTransacEmail($sendSmtpEmail);
    $_SESSION['success_message'] = 'Email envoyé avec succès!';

    // Redirection vers la page d'accueil
    header('Location: /#form');
} catch (Exception $e) {
    $_SESSION['error_message'] = 'Erreur lors de l\'envoi de l\'email';
    header('Location: /#form');
    exit;
}

// Regenerate CSRF token for the next form submission
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
?>
