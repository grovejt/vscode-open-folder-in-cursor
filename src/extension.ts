// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The explorer/context menu contribution receives the URI to the file/folder
	const openVSCodeHere = vscode.commands.registerCommand('extension.openVSCodeHere', (e: vscode.Uri) => {
		vscode.commands.executeCommand("vscode.openFolder", e, true);
	});
	context.subscriptions.push(openVSCodeHere);


	let openCursorHere = vscode.commands.registerCommand('extension.openCursorHere', (resource: vscode.Uri) => {
		const folderPath = resource.fsPath;

		// Assuming 'cursor' is in your PATH. Otherwise, provide full path.
		const openCommand = `cursor ${folderPath}`;

		exec(openCommand, (error, stdout, stderr) => {
			if (error) {
				vscode.window.showErrorMessage(`Error opening folder in Cursor: ${error.message}`);
			}
		});
	});
	context.subscriptions.push(openCursorHere);





	// // Use the console to output diagnostic information (console.log) and errors (console.error)
	// // This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "vscode-open-folder-in-cursor" is now active!');

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with registerCommand
	// // The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('vscode-open-folder-in-cursor.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from VSCodeOpenFolderInCursor!');
	// });

	// context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
