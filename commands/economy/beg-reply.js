module.exports = {
name: "beg-reply",
aliases: "beg-message",
usage: "beg-reply < message >",
code: `
$getServerVar[check] **$username** Set the reply for \`beg\` to $message
$setServerVar[breply;$getServerVar[breply]/$message]

$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < message >\`\`\`]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}